import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S49054Page } from './s49054.page';

describe('S49054Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S49054Page;
  let fixture: ComponentFixture<S49054Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S49054Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S49054Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
