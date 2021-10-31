import React from 'react'

function SectionHeader(props) {
	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-lg-6">
					<div className="section-title underline">
						<span>
							{props.title}
						</span>
						<h2>
							{props.subtitle}
							<span className="span-inline"></span>
						</h2>
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
