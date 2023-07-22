import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132256Page } from './s132256.page';

describe('S132256Page', () => {
  // let   
    let component:  S132256Page;
  let fixture: ComponentFixture<S132256Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132256Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132256Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
