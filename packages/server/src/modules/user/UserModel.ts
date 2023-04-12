import mongoose, { Schema, Document } from 'mongoose';
import bcrypt from 'bcryptjs';

export interface User {
    name: string;
    email: string;
    password: string;
}

export interface UserDocument extends User, Document {
    hashPassword(password: string): Promise<string>;
}

const UserSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
    },
    {
        timestamps: {
            createdAt: true,
            updatedAt: true,
        },
    },
);

UserSchema.pre<UserDocument>('save', async function (next) {
    if (this.isModified('password') || this.isNew) {
        const hashedPassword = await this.hashPassword(this.password);
        this.password = hashedPassword;
    }

    return next();
});

UserSchema.methods = {
    hashPassword: async function (password: string) {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        return hashedPassword;
    },
};

export const UserModel = mongoose.model<UserDocument>('User', UserSchema);