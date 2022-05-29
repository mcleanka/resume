import React from 'react'

function SectionHeader(props) {
	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-lg-6">
					<div className="section-title underline">
						{props.subtitle && (<span>
							{props.subtitle}
						</span>)}
						{props.title && (<h2>
							{props.title}
							<span className="span-inline"></span>
						</h2>)}
						<p className="title-desc">
							{props.description}
						</p>
					</div>
				</div>
			</div>
		</div>

	)
}

export default SectionHeader
