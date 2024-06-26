import { ComponentStory } from "@storybook/react"
import { createMeta } from "stories/utils"
import OrgSignUpModal from "components/auth/OrgSignUpModal"
import { Providers } from "components/providers"
import { wrapper } from "components/store"
import { Provider as Redux } from "react-redux"

export default createMeta({
  title: "Pages/Auth/Org Sign Up Modal",
  component: OrgSignUpModal
})

const Template: ComponentStory<typeof OrgSignUpModal> = args => (
  <OrgSignUpModal {...args} />
)

export const Primary = Template.bind({})

Primary.args = {
  onSuccessfulSubmit: () => {},
  onHide: () => {},
  show: true
}
Primary.storyName = "Org Sign Up Modal"

Primary.decorators = [
  (Story, ...rest) => {
    const { store, props } = wrapper.useWrappedStore(...rest)

    return (
      <Redux store={store}>
        <Providers>
          <Story />
        </Providers>
      </Redux>
    )
  }
]
