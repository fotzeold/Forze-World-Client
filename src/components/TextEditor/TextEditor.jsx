import { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import "./TextEditor.scss"

const TextEditor = ({ onContentChange }) => {
	const editorRef = useRef(null);
	const log = () => {
		if (editorRef.current) {
			const editorContent = editorRef.current.getContent();
			onContentChange(editorContent)
			console.log(editorContent);
		}
	};

	return (
		<div className="text-editor">
			<Editor
				apiKey={process.env.REACT_APP_EDITOR_TOKEN}
				onInit={(_evt, editor) => editorRef.current = editor}
				init={{
					height: 440,
					menubar: false,
					plugins: [
						'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
						'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
						'insertdatetime', 'media', 'table', 'code', 'wordcount'
					],
					toolbar: 'undo redo | blocks | ' +
						'bold italic forecolor | alignleft aligncenter ' +
						'alignright alignjustify | bullist numlist outdent indent | ' +
						'removeformat',
					content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
				}}
			/>
			<button className='text-editor__prew' onClick={log}>Переглянути результат</button>
		</div>
	)
}

export default TextEditor