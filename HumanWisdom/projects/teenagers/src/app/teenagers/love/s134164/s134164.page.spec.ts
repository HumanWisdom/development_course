import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S134164Page } from './s134164.page';

describe('S134164Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S134164Page;
  let fixture: ComponentFixture<S134164Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S134164Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S134164Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
