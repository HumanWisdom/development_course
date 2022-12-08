import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45092Page } from './s45092.page';

describe('S45092Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45092Page;
  let fixture: ComponentFixture<S45092Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45092Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45092Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
