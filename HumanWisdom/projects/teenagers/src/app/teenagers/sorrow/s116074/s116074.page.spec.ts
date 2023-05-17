import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S116074Page } from './s116074.page';

describe('S116074Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S116074Page;
  let fixture: ComponentFixture<S116074Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S116074Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S116074Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
