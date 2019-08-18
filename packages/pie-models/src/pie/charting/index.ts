import {PromptConfig} from '../../PromptConfig';
import {CommonConfigSettings} from '../../CommonConfigSettings';
import {PieModel} from '../../PieModel';
import { ConfigureProp } from '../ConfigurationProp';

interface Chart {
    /** Width for chart representation */
    width: number;

    /** Height for chart representation */
    height: number;
}

interface ChartSettings {
    /** Min value */
    min: number;

    /** Max value */
    max: number;

    /** Step value */
    step: number;

    /** Label step value */
    labelStep: number;

    /** Axis Label */
    axisLabel: string;
}

interface Category {
    /** Indicates category label */
    label: string;

    /** Indicates category value */
    value: number;

    /** Indicates if category is default category */
    initial: boolean;

    /** Indicates if category label & value are interactive */
    interactive: boolean;

    /** Indicates if category label is editable */
    editable: boolean;

    /** Indicates if category is deletable */
    deletable: boolean;

    /** Indicates correctness for a category */
    correctness: {
        value: 'correct' | 'incorrect';
        label: 'correct' | 'incorrect';
    }
}

interface Answer {
    /** Indicates name of answer */
    name: string;

    /** Indicates marks for the answer */
    data: [Category];
}

/**
 * NOTE: There's no functionality described for studentInstructions
 * so there's no implementation (they are only added in model)
 */

/**
 * Model Object for @pie-elements/charting
 * @additionalProperties false
 */
export interface ChartingPie extends PieModel {
    /** Indicates if user can add more categories */
    addCategoryEnabled: Boolean;

    /** Indicates default value for a new category's label */
    categoryDefaultLabel: String;

    chartType: 'bar' | 'histogram' | 'lineCross' | 'lineDot' | 'dorPlot' | 'linePlot'

    /** Indicates marks that are set as answers; Note: alternates can be added having this form: alternateIndex */
    correctAnswer: Answer;

    /** Indicates default categories for the answer */
    data: [Category];

    /** Indicates domain settings for the chart */
    domain: ChartSettings;

    /** Indicates if user can edit default categories */
    editCategoryEnabled: Boolean;

    /** Indicates the chart line model */
    graph: Chart;

    /** Indicates prompt value */
    prompt?: string;

    /** Indicates range settings for the chart */
    range: ChartSettings;

    /** Indicates rationale for the answer */
    rationale?: string;

    /** Indicates scoring type */
    scoringType?: 'all or nothing' | 'partial scoring';

    /** Indicates if student instructions are enabled */
    studentInstructions?: boolean;

    /** Indicates if teacher instructions are enabled */
    teacherInstructions?: boolean;

    /** Indicates chart title */
    title?: string;
}

/**
 * Config Object for @pie-elements/charting
 * @additionalProperties false
 */
export interface ChartingConfigure extends PromptConfig, CommonConfigSettings {
    /**
     * Rationale configuration
     */
    prompt?: ConfigureProp;

    /**
     * Prompt configuration
     */
    rationale?: ConfigureProp;

    /**
     * Scoring Type configuration
     */
    scoringType?: ConfigureProp;

    /**
     * Student Instructions configuration
     */
    studentInstructions?: ConfigureProp;

    /**
     * Teacher Instructions configuration
     */
    teacherInstructions?: ConfigureProp;

    /**
     * Chart title configuration
     */
    title?: ConfigureProp;
}