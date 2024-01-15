'use server'
import { Topic } from '@prisma/client'
import {redirect} from 'next/navigation'
import { db } from '@/db'
import paths from '@/paths'
import { auth } from '@/auth'
import {string, z} from 'zod'
import { revalidatePath } from 'next/cache'
import { setTimeout } from 'timers/promises'


const createTopicSchema =z.object({
  name: z.string().min(3).regex(/[a-z]/, { message: 'must be letters, lowercase, numbers or symbols are not allowed'}),
  description: string().min(10  )
})

type CreateTopicFormState ={
  errors:{
    name?: string[]
    description? : string[]
    _form?: string[]
  }
}

export async function createTopic (formState: CreateTopicFormState, formdata:FormData ): Promise<CreateTopicFormState>{



  const result = createTopicSchema.safeParse({
    name: formdata.get('name'),
    description: formdata.get('description')
  })
  if(!result.success){
    return {
      errors: result.error.flatten().fieldErrors
      }
    }

    const session = await auth()
    if(!session || !session.user) return {errors:{_form:['you must sign in first.']}}

    
    let topic: Topic

    try {
      topic = await db.topic.create({
        data:{
          slug: result.data.name,
          description: result.data.description,
        }        
      })
      
    } catch (err:unknown) {
      if(err instanceof Error){
      return{ errors :{ _form: [err.message] } }
      }
      else {
        return { errors: { _form: ['something went wrong']} }
      }
    }
    revalidatePath('/')
    redirect(paths.TopicShowPage(topic.slug))

  }