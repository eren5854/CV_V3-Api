let user = require("../config/defaultValue").user;
let skills = require("../config/defaultValue").skills;
let medias = require("../config/defaultValue").medias;
let experiences = require("../config/defaultValue").experiences;
let educations = require("../config/defaultValue").educations;
let referances = require("../config/defaultValue").referances;

const {v4: uuidv4} = require("uuid");

const User = require("../models/user");
const Skill = require("../models/skill");
const Media = require("../models/media");
const Experience = require("../models/experience");
const Education = require("../models/education");
const Referance = require("../models/referance");

const createDefaultValue = async (req,res)=>{
    let userModel = await User.findOne();
    if(userModel === null){
        userModel = new User(user);
        userModel._id = uuidv4();
        await userModel.save();
    }

    for(let s of skills){
        let skill = await Skill.findOne({title: s.title});
        if(skill === null){
            skill = new Skill(s);
            skill._id = uuidv4();
            await skill.save();
        }
    }

    for(let m of medias){
        let media = await Media.findOne({title: m.title});
        if(media === null){
            media = new Media(m);
            media._id = uuidv4();
            await media.save();
        }
    }

    for(let e of experiences){
        let experience = await Experience.findOne({
            title: e.title, 
            subTitle: e.subTitle, 
            date: e.date, 
            description: e.description
        });
        if(experience === null){
            experience = new Experience(e);
            experience._id = uuidv4();
            await experience.save();
        }
    }

    for(let ed of educations){
        let education = await Education.findOne({title: ed.title});
        if(education === null){
            education = new Education(ed);
            education._id = uuidv4();
            await education.save(); 
        }
    }

    for(let r of referances){
        let referance = await Referance.findOne({name: r.name});
        if(referance === null){
            referance = new Referance(r);
            referance._id = uuidv4();
            await referance.save();
        }
    }

    res.json({message: "Default value is created"})
}

const get = async (req,res) => {
    const information = {
        user: await User.findOne(),
        skills: await Skill.find(),
        medias: await Media.find(),
        experiences: await Experience.find(),
        educations: await Education.find(),
        referances: await Referance.find()
    }
    res.json(information);
}

const set = async (req,res) => {
    const body = req.body;
    const currentUser = await User.findOne();
    console.log(currentUser);
    const newUser = new User(body.user);
    newUser._id = currentUser._id;
    await User.findOneAndUpdate({_id: currentUser._id}, newUser);

    skills = body.skills;
    const delSkills = await Skill.find();
    for(let c of delSkills){
        const result = skills.findIndex(p=> p._id === c.id);
        if(result===-1){
            await Skill.findByIdAndRemove(c._id);
        }
    }

    for(let s of skills){
        if(s._id===null){
            const skill = new Skill();
            skill._id = uuidv4();
            skill.title = s.title;
            await skill.save();
        }
        else{
            const skill = new Skill();
            skill._id = s._id;
            skill.title = s.title;
            await Skill.findByIdAndUpdate(s._id, skill);
        }
    }

    medias = body.medias;
    const delMedia = await Media.find();
    for(let me of delMedia){
        const result = medias.findIndex(p=> p._id === me.id);
        if(result===-1){
            await Media.findByIdAndRemove(me._id);
        }
    }

    for(let m of medias){
        if(m._id===null){
            const media = new Media();
            media._id = uuidv4();
            media.title = m.title;
            media.link = m.link;
            media.icon = m.icon;
            await media.save();
        }
        else{
            const media = new Media();
            media._id = m._id;
            media.title = m.title;
            media.link = m.link;
            media.icon = m.icon;
            await Media.findByIdAndUpdate(m._id, media);
        }
    }

    experiences = body.experiences;
    const delExperience = await Experience.find();
    for(let ex of delExperience){
        const result = experiences.findIndex(p=> p._id === ex.id);
        if(result===-1){
            await Experience.findByIdAndRemove(ex._id);
        }
    }
    for(let e of experiences){
        if(e._id === null){
            const experience = new Experience();
            experience._id = uuidv4();
            experience.title = e.title;
            experience.subTitle = e.subTitle;
            experience.date = e.date;
            experience.description = e.description;
            await experience.save(); 
        }
        else{
            const experience = new Experience();
            experience._id = e._id;
            experience.title = e.title;
            experience.subTitle = e.subTitle;
            experience.date = e.date;
            experience.description = e.description;
            await Experience.findByIdAndUpdate(e._id, experience);
        }
    }

    educations = body.educations;
    const delEducation = await Education.find();
    for(let edu of delEducation){
        const result = educations.findIndex(p=> p._id === edu.id);
        if(result===-1){
            await Education.findByIdAndRemove(edu._id);
        }
    }
    for(let ed of educations){
        if(ed._id === null){
            const education = new Education();
            education._id = uuidv4();
            education.title = ed.title;
            education.faculty = ed.faculty;
            education.degree = ed.degree;
            education.date = ed.date;
            await education.save(); 
        }
        else{
            const education = new Education();
            education._id = ed._id;
            education.title = ed.title;
            education.subTitle = ed.subTitle;
            education.date = ed.date;
            education.description = ed.description;
            await Education.findByIdAndUpdate(ed._id, education);
        }
    }

    referances = body.referances;
    const delReferance = await Referance.find();
    for(let re of delReferance){
        const result = referances.findIndex(p=> p._id === re.id);
        if(result===-1){
            await Referance.findByIdAndRemove(re._id);
        }
    }
    for(let r of referances){
        if(r._id === null){
            const referance = new Referance();
            referance._id = uuidv4();
            referance.name = r.name;
            referance.title = r.title;
            referance.subTitle = r.subTitle;
            referance.phone = r.phone;
            referance.phoneIcon = r.phoneIcon;
            referance.email = r.email;
            referance.emailIcon = r.emailIcon;
            await referance.save(); 
        }
        else{
            const referance = new Referance();
            referance._id = r._id;
            referance.name = r.name;
            referance.title = r.title;
            referance.subTitle = r.subTitle;
            referance.phone = r.phone;
            referance.phoneIcon = r.phoneIcon;
            referance.email = r.email;
            referance.emailIcon = r.emailIcon;
            await Referance.findByIdAndUpdate(r._id, referance);
        }
    }

    res.json({message: "Update succes"});
}

module.exports = {
    createDefaultValue,
    get,
    set
}