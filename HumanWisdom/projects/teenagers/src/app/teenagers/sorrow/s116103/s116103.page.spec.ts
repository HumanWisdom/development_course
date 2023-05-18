import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S116103Page } from './s116103.page';

describe('S116103Page', () => {
      
    let component:  S116103Page;
  let fixture: ComponentFixture<S116103Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S116103Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S116103Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
