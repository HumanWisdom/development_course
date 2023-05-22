import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S116065Page } from './s116065.page';

describe('S116065Page', () => {
      
    let component:  S116065Page;
  let fixture: ComponentFixture<S116065Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S116065Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S116065Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
