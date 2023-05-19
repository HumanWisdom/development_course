import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S116075Page } from './s116075.page';

describe('S116075Page', () => {
      
    let component:  S116075Page;
  let fixture: ComponentFixture<S116075Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S116075Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S116075Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
