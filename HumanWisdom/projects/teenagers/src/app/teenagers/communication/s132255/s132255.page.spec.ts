import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132255Page } from './s132255.page';

describe('S132255Page', () => {
  // let   
    let component:  S132255Page;
  let fixture: ComponentFixture<S132255Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132255Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132255Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
