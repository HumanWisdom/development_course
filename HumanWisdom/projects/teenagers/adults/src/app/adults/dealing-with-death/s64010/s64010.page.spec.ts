import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S64010Page } from './s64010.page';

describe('S64010Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S64010Page;
  let fixture: ComponentFixture<S64010Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S64010Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S64010Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
