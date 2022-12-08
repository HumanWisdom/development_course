import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62113Page } from './s62113.page';

describe('S62113Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62113Page;
  let fixture: ComponentFixture<S62113Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62113Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62113Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
