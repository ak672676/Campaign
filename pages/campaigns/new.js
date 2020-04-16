import React, { Component } from "react";
import Layout from "../../components/Layout";
import { Form, Button, Input, Message } from "semantic-ui-react";
import factory from "../../etherium/factory";
import web3 from "../../etherium/web3";
import { Router } from "../../routes";

class CampaignNew extends Component {
  state = {
    minimunContribution: "",
    errorMesssage: "",
    loading: false,
  };

  onSubmit = async (event) => {
    event.preventDefault();
    this.setState({ loading: true, errorMesssage: "" });
    try {
      const accounts = await web3.eth.getAccounts();
      await factory.methods
        .createCampaign(this.state.minimunContribution)
        .send({ from: accounts[0] });
      Router.pushRoute("/");
    } catch (err) {
      this.setState({ errorMesssage: err.message });
    }
    this.setState({ loading: false });
  };
  render() {
    return (
      <div>
        <Layout>
          <h3>Create a Campaign</h3>
          <Form error={!!this.state.errorMesssage} onSubmit={this.onSubmit}>
            <Form.Field>
              <label>Minimum Contribution</label>
              <Input
                label="wei"
                labelPosition="right"
                value={this.state.minimunContribution}
                onChange={(event) =>
                  this.setState({ minimunContribution: event.target.value })
                }
              />
            </Form.Field>
            <Message error header="Oops" content={this.state.errorMesssage} />
            <Button primary loading={this.state.loading}>
              Create
            </Button>
          </Form>
        </Layout>
      </div>
    );
  }
}
export default CampaignNew;
