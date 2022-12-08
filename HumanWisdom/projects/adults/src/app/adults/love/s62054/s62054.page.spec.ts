import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62054Page } from './s62054.page';

describe('S62054Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62054Page;
  let fixture: ComponentFixture<S62054Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62054Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62054Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
