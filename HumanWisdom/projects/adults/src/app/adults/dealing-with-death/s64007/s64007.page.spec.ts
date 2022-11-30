import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S64007Page } from './s64007.page';

describe('S64007Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S64007Page;
  let fixture: ComponentFixture<S64007Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S64007Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S64007Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
