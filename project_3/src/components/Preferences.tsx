import React, { useState } from "react";
import DesktopNav from './DesktopNav';
import ToggleSwitch from "./ToggleSwitch";
import '../styles/Preferences.css';


function PreferencesForm() {
    let [dog, setDog] = useState(false);
    let [cat, setCat] = useState(false);
    let [male, setMale] = useState(false);
    let [female, setFemale] = useState(false);
    let [pupkit, setPupkit] = useState(false);
    let [young, setYoung] = useState(false);
    let [adult, setAdult] = useState(false);
    let [senior, setSenior] = useState(false);
    let [kids, setKids] = useState(false);
    let [pet, setPet] = useState(false);
    let [small, setSmall] = useState(false);
    let [med, setMed] = useState(false);
    let [large, setLarge] = useState(false);

    const onDogChange = (checked: boolean | ((prevState: boolean) => boolean)) => {
        setDog(checked);
    };
    const onCatChange = (checked: boolean | ((prevState: boolean) => boolean)) => {
        setCat(checked);
    };
    const onMaleChange = (checked: boolean | ((prevState: boolean) => boolean)) => {
        setMale(checked);
    };
    const onFemaleChange = (checked: boolean | ((prevState: boolean) => boolean)) => {
        setFemale(checked);
    };
    const onPupKitChange = (checked: boolean | ((prevState: boolean) => boolean)) => {
        setPupkit(checked);
    };
    const onYoungChange = (checked: boolean | ((prevState: boolean) => boolean)) => {
        setYoung(checked);
    };
    const onAdultChange = (checked: boolean | ((prevState: boolean) => boolean)) => {
        setAdult(checked);
    };
    const onSeniorChange = (checked: boolean | ((prevState: boolean) => boolean)) => {
        setSenior(checked);
    };
    const onKidsChange = (checked: boolean | ((prevState: boolean) => boolean)) => {
        setKids(checked);
    };
    const onPetChange = (checked: boolean | ((prevState: boolean) => boolean)) => {
        setPet(checked);
    };
    const onSmallChange = (checked: boolean | ((prevState: boolean) => boolean)) => {
        setSmall(checked);
    };
    const onMedChange = (checked: boolean | ((prevState: boolean) => boolean)) => {
        setMed(checked);
    };
    const onLargeChange = (checked: boolean | ((prevState: boolean) => boolean)) => {
        setLarge(checked);
    };

    return (
        <div className='Preferences__body'>
            <div className='Preferences'>
                <div className='Preferences__header'>
                    <h2 className='Preferences__title'>Your Pet Preferences</h2>
                    <p className='Preferences__desc'>
                        "Select a few of your interests for a purrfect pet and we'll help you find what you are looking for."
                    </p>
                </div>
                <div className='Preferences__matches'>
                    <p>
                        <ToggleSwitch id="dog" checked={dog} onChange={onDogChange} />
                        <label htmlFor="dog">Dog</label>
                    </p>
                    <p>
                        <ToggleSwitch id="cat" checked={cat} onChange={onCatChange} />
                        <label htmlFor="cat">Cat</label>
                    </p>
                    <p>
                        <ToggleSwitch id="male" checked={male} onChange={onMaleChange} />
                        <label htmlFor="male">Male</label>
                    </p>
                    <p>
                        <ToggleSwitch id="female" checked={female} onChange={onFemaleChange} />
                        <label htmlFor="female">Female</label>
                    </p>
                    <p>
                        <ToggleSwitch id="pupkit" checked={pupkit} onChange={onPupKitChange} />
                        <label htmlFor="pupkit">Baby</label>
                    </p>
                    <p>
                        <ToggleSwitch id="young" checked={young} onChange={onYoungChange} />
                        <label htmlFor="young">Young</label>
                    </p>
                    <p>
                        <ToggleSwitch id="adult" checked={adult} onChange={onAdultChange} />
                        <label htmlFor="adult">Adult</label>
                    </p>
                    <p>
                        <ToggleSwitch id="senior" checked={senior} onChange={onSeniorChange} />
                        <label htmlFor="senior">Senior</label>
                    </p>
                    <p>
                        <ToggleSwitch id="kids" checked={kids} onChange={onKidsChange} />
                        <label htmlFor="kids">Kid Friendly</label>
                    </p>
                    <p>
                        <ToggleSwitch id="pet" checked={pet} onChange={onPetChange} />
                        <label htmlFor="pet">Pet Friendly</label>
                    </p>
                    <p>
                        <ToggleSwitch id="small" checked={small} onChange={onSmallChange} />
                        <label htmlFor="small">Small Dog</label>
                    </p>
                    <p>
                        <ToggleSwitch id="med" checked={med} onChange={onMedChange} />
                        <label htmlFor="med">Medium Dog</label>
                    </p>
                    <p>
                        <ToggleSwitch id="large" checked={large} onChange={onLargeChange} />
                        <label htmlFor="large">Large Dog</label>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default PreferencesForm;