import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S110002Page } from './s110002.page';

describe('S110002Page', () => {
  // let  
    let component:  S110002Page;
  let fixture: ComponentFixture<S110002Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S110002Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S110002Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
