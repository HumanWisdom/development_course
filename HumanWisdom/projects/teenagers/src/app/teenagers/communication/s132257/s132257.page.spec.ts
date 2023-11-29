import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132257Page } from './s132257.page';

describe('S132257Page', () => {
  // let   
    let component:  S132257Page;
  let fixture: ComponentFixture<S132257Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132257Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132257Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
