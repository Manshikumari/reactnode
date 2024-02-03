import React from 'react'

function Hlo() {
    return (
        <div>
            <div className='main'>
                <div className='left'>
                    <div className="container">
                        <h1 className="title">Sign Up</h1>
                        <form onSubmit={handleSubmit} className="form">
                            <label className="label">
                                Username:
                                <input
                                    type="text"
                                    name="username"
                                    value={formData.username}
                                    onChange={handleChange}
                                    className="input"
                                />
                            </label>
                            <br />

                            <label className="label">
                                Email:
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="input"
                                />
                            </label>
                            <br />

                            <label className="label">
                                Password:
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="input"
                                />
                            </label>
                            <br />

                            <button type="submit" className="button">
                                Sign Up
                            </button>
                        </form>
                    </div>
                </div>
                <div className='right'>

                </div>
            </div>

            );
};
        </div>
    )
}

export default Hlo

