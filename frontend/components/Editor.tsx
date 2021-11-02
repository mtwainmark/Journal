import React, { useEffect } from 'react'
import EditorJS from '@editorjs/editorjs'

export const Editor = () => {

    useEffect(() => {
        
        const editor = new EditorJS({
            holder: 'editor',
            placeholder: 'Нажмите Tab для выбора инструментов'
          });

          return()=>{
              editor.isReady.then(()=>{
                editor.destroy();
              })
              .catch(e=>console.error('Error editor'))
          }
    }, [])

    return (
        <div id='editor'/>
    )
}
