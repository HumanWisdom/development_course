import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132259Page } from './s132259.page';

describe('S132259Page', () => {
  // let   
    let component:  S132259Page;
  let fixture: ComponentFixture<S132259Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132259Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132111Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
