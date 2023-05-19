import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S116082Page } from './s116082.page';

describe('S116082Page', () => {
      
    let component:  S116082Page;
  let fixture: ComponentFixture<S116082Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S116082Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S116082Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
