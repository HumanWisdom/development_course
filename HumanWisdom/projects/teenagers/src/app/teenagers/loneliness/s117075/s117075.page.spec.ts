import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S117075Page } from './s117075.page';

describe('S117075Page', () => {
  // let   
    let component:  S117075Page;
  let fixture: ComponentFixture<S117075Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S117075Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S117075Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
