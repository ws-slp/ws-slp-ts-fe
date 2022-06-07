import Layout from '~/components/Layout';
import {useState, useEffect} from 'react';
import {supabase} from '~/lib/supabase';

interface Events {
  workshops: {
    workshop_id: number;
    created_at: Date;
    updated_at: Date;
    name: string;
    is_active: boolean;
    url: string | null;
    description: string | null;
    instructor: string[] | null;
    location: string[] | null;
    start_date: Date | null;
    end_date: Date | null;
    banner_image: string | null;
    videos: string[] | null;
    additional_images: string[] | null;

    // Live sessions
    session_day_of_week: string[] | null;
    session_start_time: Date | null;
    session_end_time: Date | null;

    // Labs
    includes_labs: boolean | null;
    lab_day_of_week: string[] | null;
    lab_start_time: Date | null;
    lab_end_time: Date | null;

    // Presentations
    includes_presentation: boolean | null;
    presentation_day_of_week: string[] | null;
    presentation_start_time: Date | null;
    presentation_end_time: Date | null;
  };
}

const Workshops: React.FC = () => {
  const [workshops, setWorkshops] = useState<Events['workshops'][]>([]);

  useEffect(() => {
    const fetchWorkshops = async () => {
      const {data, error} = await supabase
        .from<Events['workshops']>('workshops_test')
        .select('*');
      if (!error) {
        setWorkshops(data);
      }
    };
    fetchWorkshops();
  }, []);

  return (
    <>
      <Layout>
        <h2>workshops page</h2>
        {workshops.map(item => (
          <div key={item.workshop_id}>
            {item.banner_image ? (
              <img src={item.banner_image} alt=" " />
            ) : (
              <p>No image available.</p>
            )}
            <h3>{item.name}</h3>
            {item.url ? (
              <p>
                <a href={item.url}>Register here.</a>
              </p>
            ) : (
              <p>This workshop has ended.</p>
            )}
            Description:
            <p>{item.description}</p>
            Details:
            <ul>
              {item.instructor?.length && item.instructor.length > 1 ? (
                <li>Instructor: {item.instructor}</li>
              ) : (
                <li>Instructors: {item.instructor}</li>
              )}
              <li>Location: {item.location}</li>
              <li>Start Date: {item.start_date}</li>
              <li>End Date: {item.end_date}</li>
            </ul>
            Live sessions will be held on {item.session_day_of_week} starting at{' '}
            {item.session_start_time} and ending at {item.session_end_time}.
            {item.includes_labs ? (
              <p>
                This workshop includes open labs on {item.lab_day_of_week}{' '}
                starting at {item.lab_start_time} until {item.lab_end_time}
              </p>
            ) : (
              <p>This workshop does not include open labs.</p>
            )}
            {item.includes_presentation ? (
              <p>
                Final presentations will be hosted on{' '}
                {item.presentation_day_of_week} starting at{' '}
                {item.presentation_start_time} until{' '}
                {item.presentation_end_time}
              </p>
            ) : (
              <p>This workshop does not include a presentation.</p>
            )}
            {item.additional_images &&
              item.additional_images.map(image => <img src={image} alt=" " />)}
            {item.videos && item.videos.map(video => <video src={video} />)}
          </div>
        ))}
      </Layout>
    </>
  );
};

export default Workshops;
