import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53223Page } from './s53223.page';

describe('S53223Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53223Page;
  let fixture: ComponentFixture<S53223Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53223Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53223Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
