import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132258Page } from './s132258.page';

describe('S132258Page', () => {
  // let   
    let component:  S132258Page;
  let fixture: ComponentFixture<S132258Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132258Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132258Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
