import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S110004Page } from './s110004.page';

describe('S110004Page', () => {
  // let  
    let component:  S110004Page;
  let fixture: ComponentFixture<S110004Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S110004Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S110004Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
