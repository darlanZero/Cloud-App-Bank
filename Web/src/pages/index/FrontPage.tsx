import { Button, Form, Input } from "antd"
import { Link } from "react-router-dom"

export const FrontPage = () => {
  return (
    <>
      <section
        className="w-full py-12 md:py-24 lg:py-32 bg-gray-950"
      >
        <div
          className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10"
        >
          <div
            className="space-y-3"
          >
            <h2  
              className="text-3xl text-light-theme-primary font-bold tracking-tighter sm:text-4xl md:text-5xl"
            >
              Welcome to the StarsFord! Your Cloud-App Bank
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed dark:text-gray-500">
              We're here to help you manage your finances. Securely. Decentralized.
            </p>
          </div>
          
          <div className="mx-auto w-full max-w-sm space-y-2">
            <Form 
              className="flex space-x-2"
              autoComplete="on"
            >
              <Form.Item

                className="max-w-lg flex-1"
              >
                <Input 
                  placeholder="Enter your e-mail..."
                />
              </Form.Item>

              <Form.Item>
                <Button
                  type="default"
                  htmlType="submit"
                  className="text-white bg-slate-900"
                >
                  Sign Up Here
                </Button>
              </Form.Item>
            </Form>
            <p
              className="text-sm text-gray-500 dark:text-gray-500 ml-2"
            >
              Sign up to get notified when we launch.
              <Link
                to='/Rules'
                className="underline underline-offset-2 hover:text-white"
              >
                Terms & Conditions.
              </Link> 
            </p>
          </div>
        </div>
      </section>

      <body
        
      >

      </body>
    </>
  )
}

