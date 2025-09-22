import React, { Component } from 'react'

interface stateType{
    now:Date,
}
export default class Clock extends Component<{}, stateType> {
    private idInterval:ReturnType<typeof setInterval> | null = null;
    constructor(props:{}) {
        super(props);
        this.state = {
            now: new Date,
        }
    }
    componentDidMount(): void {
        this.idInterval = setInterval(() => {
            this.setState({
                now: new Date,
            })
        }, 1000);
    }
    componentWillUnmount(): void {
        if(this.idInterval) clearInterval(this.idInterval);
    }
  render() {
    return (
      <>
        <span>Thời gian hiện tại:{this.state.now.toLocaleTimeString()}</span>
      </>
    )
  }
}
