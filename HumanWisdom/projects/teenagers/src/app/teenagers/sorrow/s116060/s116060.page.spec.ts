import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S116060Page } from './s116060.page';

describe('S116060Page', () => {
      
    let component:  S116060Page;
  let fixture: ComponentFixture<S116060Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S116060Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S116060Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
