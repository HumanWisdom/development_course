import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73074Page } from './s73074.page';

describe('S73074Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73074Page;
  let fixture: ComponentFixture<S73074Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73074Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73074Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
