import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62148Page } from './s62148.page';

describe('S62148Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62148Page;
  let fixture: ComponentFixture<S62148Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62148Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62148Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
