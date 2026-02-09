import { useRef } from "react"

export default function RegisterCountry() {

    const textareaRef = useRef<HTMLTextAreaElement>(null)

    const RegisterCountry = async () => {
        const country = textareaRef.current?.value;
        if (!country) {
            return;
        }

        const response = await fetch('/api/contries', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: country
        })

        if (response.ok) {
            textareaRef.current!.value = '';
            alert('Country registered successfully');
        } else {
            alert('Error registering country');
        }
    }


    return (
        <div>
            <div>
                <textarea ref={textareaRef} />
            </div>
            <button onClick={RegisterCountry}>등록</button>
        </div>
    )
}