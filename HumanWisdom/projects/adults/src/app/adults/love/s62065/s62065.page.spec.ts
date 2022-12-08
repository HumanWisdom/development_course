import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62065Page } from './s62065.page';

describe('S62065Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62065Page;
  let fixture: ComponentFixture<S62065Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62065Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62065Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
