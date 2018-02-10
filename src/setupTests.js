import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const fetchPromise = Promise.resolve({
    json: () => Promise.resolve({
        Dataobject: [
            {
                data : {
                    "krs_podmioty.nazwa": 'nazwa',
                    "krs_podmioty.krs": '1234',
                    "krs_podmioty.www": 'www.x.pl',
                    "krs_podmioty.email": 'asd@asd.pl',
                    "krs_podmioty.adres": 'asdasd 5/6 Warszawa'
                }
            }
        ]
       
      })
})

global.fetch = () => fetchPromise;