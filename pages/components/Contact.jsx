import { useState } from 'react'

const Contact = () => {

    const [inputs, setInputs] = useState({
		name: '',
		email: '',
		message: '',
	})

	const [form, setForm] = useState('')

	const handleChange = (e) => {
		setInputs((prev) => ({
			...prev,
			[e.target.id]: e.target.value,
		}))
    }

    const onSubmitForm = async (e) => {
        e.preventDefault()
    
        if (inputs.name && inputs.email && inputs.message) {
            setForm({ state: 'loading' })
            try {
                const res = await fetch(`api/contact`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(inputs),
                })
    
                const { error } = await res.json()
    
                if (error) {
                    setForm({
                        state: 'error',
                        message: error,
                    })
                    return
                }
    
                setForm({
                    state: 'success',
                    message: 'Your message was sent successfully.',
                })
                setInputs({
                    name: '',
                    email: '',
                    message: '',
                })
            } catch (error) {
                setForm({
                    state: 'error',
                    message: 'Something went wrong',
                })
            }
        }
    }
    return (
        
    <section id="contact">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <h2 className="mb-4 text-4xl tracking-tight font-semibold text-center text-gray-900 dark:text-white">
            Contact Us
            </h2>
            <p className="mb-8 lg:mb-16 text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Got a technical issue? Need details about our Business plan? Let us know.
            </p>
            <form action="#" className="space-y-8" onSubmit={(e) => onSubmitForm(e)}>
            <div>
                <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-start text-gray-900 dark:text-gray-300"
                >
                Your Name
                </label>
                    <input
                        id='name'
                        type='text'
                        value={inputs.name}
                        onChange={handleChange}
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                        placeholder="Name"
                        required=""
                    />
                </div>
            <div>
                <label
                htmlFor="email"
                className="block mb-2 text-sm text-start font-medium text-gray-900 dark:text-gray-300"
                >
                Your email
                </label>
                    <input
                    id='email'
                    type='email'
                    value={inputs.email}
                    onChange={handleChange}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                    placeholder="name@example.com"
                    required=""
                    />
                </div>
            <div className="sm:col-span-2">
                <label
                htmlFor="message"
                className="block mb-2 text-sm text-start font-medium text-gray-900 dark:text-gray-400"
                >
                Your message
                </label>
                <textarea
                    id='message'
                    type='text'
                    value={inputs.message}
                    onChange={handleChange}
                    rows={6}
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                    placeholder="Leave a comment..."
                    defaultValue={""}
                />
            </div>
            <button
                type="submit"
                className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit bg-[#38BDF8]"
                >
                Send message
            </button>
            {form.state === 'loading' ? (
                    <div>Sending....</div>
                ) : form.state === 'error' ? (
                    <div>{form.message}</div>
                ) : (
                    form.state === 'success' && <div>Sent successfully</div>
                )}
            </form>
        </div>

    </section>



    )
}

export default Contact
