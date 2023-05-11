import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S102001Page } from './s102001.page';

describe('S102001Page', () => {
  // let    
    let component:  S102001Page;
  let fixture: ComponentFixture<S102001Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S102001Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S102001Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
