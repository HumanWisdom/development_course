import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S116073Page } from './s116073.page';

describe('S116073Page', () => {
      
    let component:  S116073Page;
  let fixture: ComponentFixture<S116073Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S116073Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S116073Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
