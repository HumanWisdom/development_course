import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S104001Page } from './s104001.page';

describe('S10100Page', () => {
      
    let component:  S104001Page;
  let fixture: ComponentFixture<S104001Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S104001Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S104001Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
