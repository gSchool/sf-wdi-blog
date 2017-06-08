import React, { PureComponent } from 'react';

let instanceCount = 0;

export default class EditArticleForm extends PureComponent {
  constructor() {
    super();
    this._instanceId = ++instanceCount;
  }
  render() {
    return (
      <form className="EditArticleForm">
        <div>
          <label htmlFor={`EditArticleForm-${this._instanceId}-title`}>Title</label>
          <input id={`EditArticleForm-${this._instanceId}-title`} name="title" type="text" />
        </div>
        <div>
          <label htmlFor={`EditArticleForm-${this._instanceId}-text`}>Text</label>
          <textarea id={`EditArticleForm-${this._instanceId}-text`} name="text" />
        </div>
      </form>
    );
  }
}
