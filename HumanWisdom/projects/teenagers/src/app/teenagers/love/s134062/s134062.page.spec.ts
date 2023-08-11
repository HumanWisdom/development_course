import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S134062Page } from './s134062.page';

describe('S134062Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S134062Page;
  let fixture: ComponentFixture<S134062Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S134062Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S134062Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
