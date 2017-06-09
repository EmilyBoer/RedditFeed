        import React from 'react'
        import './App.css'


        var Note = React.createClass({
            getInitialState() {
                return {editing: false}
            },


            componentDidUpdate() {
                if (this.state.editing) {
                    this.refs.newText.focus()
                    this.refs.newText.select()
                }
            },
            shouldComponentUpdate(nextProps, nextState) {
                return this.props.children !== nextProps.children || this.state !== nextState
            },

            edit() {
                this.setState({editing: true})
            }

            },
            
            save() {
                this.props.onChange(this.refs.newText.value, this.props.id)
                this.setState({editing: false})
            },

            remove() {
                this.props.onRemove(this.props.id)
            },

            renderForm(){

                return (
                    <div className='note' 
                    style={this.style}>
                    <textarea ref="newText"
                    defaultValue={this.props.children}>
                    </textarea>
                    <button onClick={this.save}>SAVE</button>
                    </div>
                    )
                },

                render() {
                   return ( 
                   <div className="note"
                   style={this.style}>
                   <p>{this.props.children}</p>
                   <span>
                   <button onClick={this.edit}>EDIT</button>
                   <button onClick={this.remove}>X</button>
                   </span>
                   </div>
                   )
               }
           })

           export default Note