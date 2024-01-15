'use client'
import { useFormState } from "react-dom";

import { Input, Button, Textarea, Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";
import * as actions from '@/actions'
import FormButton from "../common/formButton";

export default function TopicCreateForm() {

  const [formState, action] = useFormState(actions.createTopic, { errors: {} })

  return (
    <Popover placement="left">
      <PopoverTrigger>
        <Button color="primary"> Create a Topic</Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={action}>
          <div className="flex flex-col gap-4 p-4 w-80 ">
            <h3 className="text-center text-lg ">Create a Topic</h3>
            <Input name="name" placeholder="Topic Name" label="Name" labelPlacement="outside"
              isInvalid={!!formState.errors.name}
              errorMessage={formState.errors.name?.join(', ')}
            />
            <Textarea name="description" label="Description" placeholder="Description of your topic" labelPlacement="outside"
              isInvalid={!!formState.errors.description}
              errorMessage={formState.errors.description?.join(', ')}
            />

            {formState.errors._form
              ? <div className="bg-red-200 border-red-400 p-2 rounded-lg"> {formState.errors._form}</div>
              : null
            }

            <FormButton>
              save
            </FormButton>
            {/* <Button type="submit" color="secondary">Submit</Button> */}
          </div>
        </form>
      </PopoverContent>
    </Popover>
  )
}