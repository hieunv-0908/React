import React, { Component } from 'react'
interface stateType{
    count:number,
}
export default class Count extends Component<{},stateType> {
    private idInterval:ReturnType<typeof setInterval>|null = null;
    constructor(props:{}) {
        super(props);
        this.state = {
            count:0,
        }
    }
    componentDidMount(): void {
        this.idInterval = setInterval(() => {
            if(this.state.count === 10)
                this.setState({count:-1});
            this.setState((prevState)=>({
                count:prevState.count+1
            }))
        }, 1000);
    }
    componentWillUnmount(): void {
        if(this.idInterval) clearInterval(this.idInterval);
    }
  render() {
    return (
      <div>
        <span>Count:{this.state.count}</span>
      </div>
    )
  }
}
