import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S55054Page } from './s55054.page';

describe('S55054Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S55054Page;
  let fixture: ComponentFixture<S55054Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S55054Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S55054Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
