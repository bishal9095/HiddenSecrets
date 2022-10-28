import React from 'react'

const Footer = () => {
  return (
    <>
    
    <div className='position-scroll bottom-0 w-100' style={{backgroundColor:"black",textAlign:'center',margin:'0'}}>
        <p className='text-white' style={{padding:'13px'}}>Hidden Secrets &copy;</p>
        <div className='d-flex justify-content-around text-white'>
          <div>
            <p>Mr John Smith. 132, My Street, </p>
            <p>Kingston, New York 12401</p>
            <p>67301</p>
          </div>
          <div>
            <p><strong>For more contact us at</strong></p>
            <p>Email:hiddensecrets@hs.ac.in</p>
            <p>Phone: +1 (555) 555-1234</p>          
          </div>
        </div>
        <div className='d-flex justify-content-center text-white'>
          <a className='mx-2' href='https://twitter.com/Charlot97353626'><i className="fa-brands fa-twitter"></i></a>
          <a className='mx-2' href='https://www.facebook.com/profile.php?id=100086500342815&viewas=&show_switched_toast=false&show_switched_tooltip=false&is_tour_dismissed=false&is_tour_completed=false&show_podcast_settings=false&show_community_transition=false&show_community_review_changes=false&should_open_composer=false&badge_type=NEW_MEMBER&show_community_rollback_toast=false&show_community_rollback=false&show_follower_visibility_disclosure=false&bypass_exit_warning=true'><i className="fa-brands fa-facebook"></i></a>
          <a className='mx-2' href='https://www.instagram.com/hidden_secrets_387/'><i className="fa-brands fa-instagram"></i></a>
        </div>
    </div>

    </>
  )
}

export default Footer